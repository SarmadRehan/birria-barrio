type WordmarkProps = {
  className?: string;
};

/**
 * "Birria Barrio" typeset like their wordmark: blackletter, "Birr" green, "ia Ba" white and
 * "rrio" red. A recreation in type, since no logo file is published.
 */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`font-blackletter leading-none whitespace-nowrap ${className}`} aria-label="Birria Barrio">
      <span aria-hidden="true">
        <span className="text-verde">Birr</span>
        <span className="text-snow">ia Ba</span>
        <span className="text-rojo">rrio</span>
      </span>
    </span>
  );
}
