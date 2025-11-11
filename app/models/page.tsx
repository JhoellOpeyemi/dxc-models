import ModelsHeading from '@/components/ModelsHeading/ModelsHeading'
import Models from '@/components/Models/Models'

const modelMain = {
    height: '100vh',
    height: '100svh',
    position: 'relative',
    paddingTop: '13vh',
}
export default function ModelsPage() {
  return (
    <main style={modelMain}>
        <div className='container'>
            <ModelsHeading />
        </div>
        <Models />
    </main>
  );
}
