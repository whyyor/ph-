import {
  BoltIcon,
  CheckCircleIcon,
  FaceSmileIcon,
  HandThumbUpIcon,
  SparklesIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Weight Loss",
    description:
      "Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Hydration",
    description:
      "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.",
    icon: BoltIcon,
  },
  {
    name: "Liver health",
    description:
      "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.",
    icon: HeartIcon,
  },
  {
    name: "Detoxification",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: SparklesIcon,
  },
  {
    name: "Digestive Health",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: CheckCircleIcon,
  },
  {
    name: "PH Balance",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: FaceSmileIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-2">
        <div className="mx-auto flex flex-col grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl mb-50 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why choose us?
          </h2>
          <h3 className="text-xl relative">
            PH + Before Launching our Products Company had done all the research
            and development about on Herbs mix Water which provides all benifits
            given below
          </h3>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
