import { IWorkout } from '@/types/workout';
import WorkOutCard from './WorkOutCard';

const LibraryGridPage = ({ workOutDatas = [] }: { workOutDatas?: IWorkout[] }) => {
    return (
        <div className=' container ms-auto '>
            <section className='mx-5'>
                <h2 className='font-oswald font-bold text-3xl mt-2'>THE LIBRARY</h2>
                <p className='text-sm '>Twelve lifts covering every major muscle group.</p>
            </section>
            <section className=" my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {(workOutDatas ?? []).map((workOutData) => (
                    <WorkOutCard
                        key={String((workOutData as IWorkout)?.id ?? (workOutData as IWorkout)?.name ?? 'workout-card')}
                        workOut={workOutData as IWorkout}
                    />
                ))}
            </section> 
        </div>
    );
};

export default LibraryGridPage;