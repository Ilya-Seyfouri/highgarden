// Inline SVG payment logos. Sized via wrapper className.
// Each card is 38x24 viewBox with rounded corners and a 1px outline so they
// read as physical cards on light backgrounds.

function CardFrame({ bg = '#ffffff', stroke = '#e5e7eb', children }) {
  return (
    <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0.5" y="0.5" width="37" height="23" rx="3" fill={bg} stroke={stroke} />
      {children}
    </svg>
  );
}

function VisaLogo() {
  return (
    <CardFrame>
      <text
        x="19"
        y="16.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="9"
        fill="#1A1F71"
        letterSpacing="0.5"
      >
        VISA
      </text>
    </CardFrame>
  );
}

function MastercardLogo() {
  return (
    <CardFrame>
      <circle cx="15.5" cy="12" r="6" fill="#EB001B" />
      <circle cx="22.5" cy="12" r="6" fill="#F79E1B" />
      <path
        d="M19 7.4a6 6 0 0 0 0 9.2 6 6 0 0 0 0-9.2z"
        fill="#FF5F00"
      />
    </CardFrame>
  );
}

function AmexLogo() {
  return (
    <CardFrame bg="#006FCF" stroke="#006FCF">
      <text
        x="19"
        y="11"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="4.5"
        fill="#ffffff"
        letterSpacing="0.3"
      >
        AMERICAN
      </text>
      <text
        x="19"
        y="16.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="4.5"
        fill="#ffffff"
        letterSpacing="0.3"
      >
        EXPRESS
      </text>
    </CardFrame>
  );
}

function PayPalLogo() {
  return (
    <CardFrame>
      <text
        x="19"
        y="16"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="8.5"
      >
        <tspan fill="#003087">Pay</tspan>
        <tspan fill="#009CDE">Pal</tspan>
      </text>
    </CardFrame>
  );
}

function KlarnaLogo() {
  return (
    <CardFrame bg="#FFA8CD" stroke="#FFA8CD">
      <text
        x="19"
        y="16"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#0B051D"
        letterSpacing="-0.2"
      >
        Klarna.
      </text>
    </CardFrame>
  );
}

const LOGOS = {
  Visa: { Component: VisaLogo, label: 'Visa' },
  Mastercard: { Component: MastercardLogo, label: 'Mastercard' },
  Amex: { Component: AmexLogo, label: 'American Express' },
  PayPal: { Component: PayPalLogo, label: 'PayPal' },
  Klarna: { Component: KlarnaLogo, label: 'Klarna' },
};

export default function PaymentLogo({ brand, className = 'w-12 h-8' }) {
  const entry = LOGOS[brand];
  if (!entry) return null;
  const { Component, label } = entry;
  return (
    <span className={`inline-block ${className}`} role="img" aria-label={label} title={label}>
      <Component />
    </span>
  );
}
