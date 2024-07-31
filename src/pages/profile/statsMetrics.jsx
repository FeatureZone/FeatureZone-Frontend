import P from './profileConstant';

const StatsAndMetrics = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around mt-8">
      {P.METRIC.map((metric, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 text-center w-full md:w-1/3 m-4"
        >
          <div className="flex justify-center items-center mb-4">
            {metric.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
          <p className="text-2xl font-semibold mb-2">{metric.value}</p>
          <p className="text-gray-600">{metric.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsAndMetrics;
