
import { use } from 'react';
import ToolCard from './ToolCard';

const Tools = ({dataPromise, carts, setCarts}) => {
    const tools = use(dataPromise)
    console.log(tools);
    return (
        <div className="">

            <div className='py-20 max-w-7xl mx-auto px-4'>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {tools.map(tool => (
                   <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></ToolCard>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default Tools;