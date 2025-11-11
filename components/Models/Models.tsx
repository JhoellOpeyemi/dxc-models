import { models, ModelType } from "@/data/models";

import ModelCard from "@/components/ModelCard/ModelCard";
import './models.css'

const Models = () => {
    return (
        <section className='models-section-container'>
            <ul className='models-list-container'>
                {models.map((model: ModelType, index: number) => (
              <ModelCard key={index} index={index} model={model} />
            ))}
            </ul>
        </section>
    )
}

export default Models