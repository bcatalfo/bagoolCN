import "./primary-button.css";

export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a className="w-full rounded-full bg-green-300">
      <div className="bg-green-300">{children}</div>
    </a>
  );
}
