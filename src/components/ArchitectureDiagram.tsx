import { Fragment } from 'react';
import { Reveal } from './MotionPrimitives';

const flowNodes = [
  { label: 'CLIENT', title: 'Browser / mobile app', copy: 'Sends the request over HTTPS.' },
  { label: 'EC2 · NGINX', title: 'TLS termination', copy: 'Reverse proxy into the Docker network.' },
  { label: 'NESTJS', title: 'API + outbox write', copy: 'Message, notification and delivery intent commit in one transaction.', core: true },
  { label: 'POSTGRESQL 17', title: 'Source of truth', copy: 'Encrypted EBS volume, private Compose network.' },
];

const relayChain = [
  { label: 'RELAY', title: 'FOR UPDATE SKIP LOCKED' },
  { label: 'AMAZON SQS', title: 'Queue' },
  { label: 'WORKER', title: 'Long-polling' },
  { label: 'APPSYNC EVENTS', title: 'IAM / SigV4' },
];

export function ArchitectureDiagram() {
  return (
    <Reveal className="thakeel-diagram-wrap">
      <figure className="thakeel-diagram" aria-label="Al Thakeel system design: request path and realtime delivery">
        <figcaption className="diagram-head">
          <span className="diagram-kicker">AL THAKEEL · SYSTEM DESIGN</span>
          <h4>How one message reaches every participant</h4>
          <p>One write, two delivery paths. REST stays the source of truth.</p>
        </figcaption>
        <div className="diagram-legend"><span>— REQUEST PATH</span><span>···· ASYNC DELIVERY</span></div>
        <div className="diagram-flow">
          {flowNodes.map((node, index) => (
            <Fragment key={node.label}>
              {index > 0 && <span className="diagram-arrow" aria-hidden="true">→</span>}
              <div className={`diagram-node${node.core ? ' diagram-node-core' : ''}`}>
                <span>{node.label}</span>
                <strong>{node.title}</strong>
                <p>{node.copy}</p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="diagram-branch">
          <div className="diagram-branch-path">
            <span className="diagram-branch-label">PRIVATE MEDIA</span>
            <div className="diagram-node">
              <span>AMAZON S3</span>
              <strong>Presigned POST</strong>
              <p>Verified with HeadObject, served through short-lived signed URLs.</p>
            </div>
          </div>
          <div className="diagram-branch-path">
            <span className="diagram-branch-label">REALTIME HINT (ASYNC)</span>
            <div className="diagram-chain">
              {relayChain.map((node, index) => (
                <Fragment key={node.label}>
                  {index > 0 && <span className="diagram-arrow diagram-arrow-dotted" aria-hidden="true">···→</span>}
                  <div className="diagram-node diagram-node-small">
                    <span>{node.label}</span>
                    <strong>{node.title}</strong>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="diagram-notes">
          <div><span>DEPLOY INTEGRITY</span><p>Exact-commit deploys: migrations run before the API restarts, a running-image identity check, then an HTTPS health check.</p></div>
          <div><span>HEALTH & MONITORING</span><p>CloudWatch alarms watch the EC2 instance; GitHub Actions gates every release on 365 automated tests.</p></div>
        </div>
        <div className="diagram-failure"><span>FAILURE STORY</span><p>A realtime hint can be dropped. The client still sees the message on its next poll — REST never depends on the hint arriving.</p></div>
        <div className="diagram-takeaway">Delivery is at-least-once. REST is authoritative; realtime is a hint, not a dependency.</div>
      </figure>
    </Reveal>
  );
}
