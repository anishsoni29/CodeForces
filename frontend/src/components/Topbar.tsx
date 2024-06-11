export const Topbar = () => {
  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full bg-black min-h-56 align-center p-5">
        <img src="/blackhorse1.webp" className="max-w-56" />
        <NavBar />
      </div>
    </div>
  );
};

const topbarItems = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Activity",
    route: "/activity",
  },
  {
    title: "Problems",
    route: "/problems",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
];

function NavBar() {
  return (
    <div className="flex">
      {topbarItems.map((item) => (
        <NavbarItem route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function NavbarItem({ title, route }: { title: string; route: string }) {
  return (
    <div className="mx-10 text-slate-500 text-lg cursor-pointer">{title}</div>
  );
}
