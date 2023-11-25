type MainSectionCardProps = {
  children: React.ReactNode;
};

function MainSectionCard({ children }: MainSectionCardProps) {
  return (
    <div className="grow p-4">
      <div className="text-neutral-300 bg-[#110D0D] p-4 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default MainSectionCard;
