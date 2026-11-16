import { Reveal } from './MotionPrimitives';

export type Decision = {
  number: string;
  title: string;
  problem: string;
  decision: string;
  result: string;
};

export function DecisionLedger({ decisions }: { decisions: Decision[] }) {
  return (
    <div className="decision-list">
      {decisions.map((item, index) => (
        <Reveal className="decision-row" key={item.number} delay={index * 0.05}>
          <span>{item.number}</span>
          <h4>{item.title}</h4>
          <dl>
            <div><dt>PROBLEM</dt><dd>{item.problem}</dd></div>
            <div><dt>DECISION</dt><dd>{item.decision}</dd></div>
            <div><dt>RESULT</dt><dd>{item.result}</dd></div>
          </dl>
        </Reveal>
      ))}
    </div>
  );
}
