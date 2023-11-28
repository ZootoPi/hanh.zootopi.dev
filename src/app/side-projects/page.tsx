import config from "@/config";

export default function SideProjects() {
  return (
    <div className="max-w-6xl mx-auto p-5 flex gap-10 flex-col">
      {config.sideProjects.map((sideProject, index) => (
        <div key={index} className="flex h-full gap-5 lg:flex-row flex-col">
          <div>
            <img
              src={sideProject.image}
              alt={sideProject.title}
              className="max-w-2xl w-full h-auto mx-auto"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">
              <a href={sideProject.link} target="_blank">
                {sideProject.title}
              </a>
            </h3>
            <p className="mt-2">{sideProject.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
