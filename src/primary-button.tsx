import "./primary-button.css";

export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a>
      <div className="">{children}</div>
    </a>
  );
}
