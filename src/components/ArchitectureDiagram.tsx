import { MediaReveal } from './MotionPrimitives';

const diagramAlt =
  'System design diagram titled "How one message reaches every participant," subtitled "One write, two delivery paths. REST stays the source of truth." ' +
  'The client (web and mobile) sends a request over HTTPS REST with a Clerk JWT to EC2/Nginx for TLS termination, which forwards it to the NestJS API. ' +
  'The API verifies, authorizes and applies rules, then commits the message and an outbox row to PostgreSQL 17 in one transaction, inside a highlighted "truth plane" that is authoritative. ' +
  'Private media uploads go from the API to Amazon S3 via presigned POST, verified with HeadObject and served through short-lived signed URLs. ' +
  'In a separate "delivery plane," disposable and retryable, an outbox relay claims unpublished rows and sends them to Amazon SQS, with a dead-letter queue for poison messages; long-polling delivery workers receive messages and delete them on success. ' +
  'Workers publish realtime hints with IAM/SigV4 to three channels: AppSync Events, which broadcasts over a private WebSocket channel with no storage; push notifications via Apple APNs and Firebase Cloud Messaging; and transactional email via Amazon SES. ' +
  'The client then reads the confirmed record from REST using a cursor. ' +
  'An operations panel notes deploy integrity (exact-commit deploys, migrations before restart, a running-image identity check, then an HTTPS health check) and health and monitoring (CloudWatch alarms watch the EC2 instance; GitHub Actions gates every release on 365 automated tests). ' +
  'Failure story: a realtime hint can be dropped, and the client still sees the message on its next poll, since REST never depends on the hint arriving. ' +
  'Takeaway: delivery is at-least-once; REST is authoritative, and realtime is a hint, not a dependency.';

export function ArchitectureDiagram() {
  return (
    <MediaReveal className="thakeel-diagram-wrap">
      <figure className="thakeel-diagram">
        <img src="/images/al-thakeel-architecture.png" alt={diagramAlt} loading="lazy" decoding="async" />
      </figure>
    </MediaReveal>
  );
}
