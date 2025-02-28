import { Feature } from './Feature';

const features = [
  {
    title: 'Task & Project Management',
    description:
      'Organize your projects efficiently with structured task lists, priorities, and deadlines.',
  },
  {
    title: 'Seamless Team Collaboration',
    description:
      'Enhance teamwork with real-time updates, shared workspaces, and integrated messaging.',
  },
  {
    title: 'Automated Workflow & Reminders',
    description:
      'Stay on track with automated task assignments, smart notifications, and progress tracking.',
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-7xl tracking-tighter">
          Manage Your Projects with Ease
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            {' '}
            Plan, track, and collaborate on projects effortlessly. From
            assigning tasks to monitoring progress, keep everything organized in
            one place.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
