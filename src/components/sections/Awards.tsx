import { AWARDS } from "../../constants";

const Awards = () => {
  return (
    <section id="awards" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Honors & Awards
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl shadow border-l-4 border-${a.colorClass}-500`}
            >
              <h3 className="font-bold text-lg">{a.title}</h3>
              <p className={`text-${a.colorClass}-600 font-bold text-sm`}>
                {a.rank}
              </p>
              <p className="text-slate-600 mt-2">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
