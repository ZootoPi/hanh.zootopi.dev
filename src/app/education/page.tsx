import config from "@/config";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="sm:mb-28 mb-20">
        <p className="text-4xl italic text-center">
          &quot;An investment in knowledge pays the best interest.&quot;
        </p>
        <p className="text-end mt-3">- Benjamin Franklin</p>
      </div>
      <h2 className="text-4xl mb-14">EDUCATION</h2>
      <div className="flex gap-10 flex-col">
        {config.education.map((education, index) => (
          <div key={index} className="flex gap-5 sm:flex-row flex-col">
            <div className="sm:w-64 w-full max-h-40">
              <img
                src={education.image}
                alt={education.school}
                className="mx-auto max-h-40"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">
                <a href={education.link} target="_blank">
                  {education.school}
                </a>
              </h3>
              <p className="mt-2">
                <i>{education.degree}</i>
              </p>
              <p className="mt-2">
                <i>{education.date}</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
