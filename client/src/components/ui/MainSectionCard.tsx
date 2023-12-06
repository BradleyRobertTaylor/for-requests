type MainSectionCardProps = {
  children: React.ReactNode;
};

function MainSectionCard({ children }: MainSectionCardProps) {
  return (
    <div className="grow py-4 pl-4">
      <div className="text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-[#110D0D] p-4 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default MainSectionCard;
