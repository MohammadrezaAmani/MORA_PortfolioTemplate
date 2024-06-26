import Data, { resumeLangs } from "../../configs/resume/data";
import { useLang } from "../../hooks/langHook";

function ResumeTemplate(props: {
  slug: string;
  resumeLang: (typeof resumeLangs)[0];
}) {
  const { lang } = useLang();
  const indexing = Data.personal.langs.findIndex((item) => item.lang === lang);
  const dataLang = Data.personal.langs[indexing];

  return (
    <div className="flex flex-row space-x-4 rtl:space-x-reverse p-7">
      <div className="mb-4 bg-slate-900 p-4 w-2/5">
        <img
          src={Data.personal.image}
          alt="John Doe"
          className="w-[19rem] h-auto rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl text-white mb-2">
            {props.resumeLang.aboutme}
          </h2>
          <p className="flex flex-nowrap text-gray-300">{dataLang.about}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl mb-2 text-white">{props.resumeLang.skill}</h2>
          <ul className="list-disc list-inside text-gray-300">
            {dataLang.favorites.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-4 w-3/5">
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-5">{dataLang.name}</h2>
          <div className="grid grid-cols-2 gap-x-5">
            {Data.personal.socials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-gray-900 hover:underline flex items-center"
              >
                <item.icon className="h-6 w-6 mr-1" />
                {item.value}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.education}
          </h2>
          {Data.education.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span>
              </div>
              <p className="text-sm font-light text-slate-700">
                {item.langs[indexing].description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.experience}
          </h2>
          {Data.experiences.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span>
              </div>
              <p className="text-sm font-light text-slate-700">
                {item.langs[indexing].description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">
            {props.resumeLang.projects}
          </h2>
          {Data.projects.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.langs[indexing].title}
                </span>
                {/* <span className="text-sm text-gray-400">
                  {item.created_at} - {item.updated_at}
                </span> */}
              </div>
              <p className="text-sm font-light text-slate-700">
                {item.langs[indexing].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate;
