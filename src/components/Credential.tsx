const awsCredential = {
  title: 'AWS Certified Solutions Architect – Associate',
  issuer: 'Amazon Web Services',
  // Add the verification URL once available, e.g. a Credly badge link.
  verifyHref: null as string | null,
};

export function Credential({ className = '' }: { className?: string }) {
  return (
    <div className={`credential-line ${className}`}>
      <span>CREDENTIAL</span>
      <strong>{awsCredential.title}</strong>
      <span>
        {awsCredential.issuer}
        {awsCredential.verifyHref && (
          <>
            {' · '}
            <a href={awsCredential.verifyHref} target="_blank" rel="noreferrer" data-cursor="external">
              Verify ↗
            </a>
          </>
        )}
      </span>
    </div>
  );
}
