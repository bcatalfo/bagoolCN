import "./primary-button.css";

export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a className="w-full rounded-full bg-green-300 hover:bg-transparent">
      <div className="bg-green-300 flex items-center text-balance py-4 px-4 text-black gap-4">
        {children}
      </div>
    </a>
  );
}
