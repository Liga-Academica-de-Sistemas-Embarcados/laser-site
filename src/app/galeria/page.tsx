import { getDictionary } from '../dictionaries';
import { Header } from "@/components/Header";
import { PhotoGallery } from "@/components/galeria/PhotoGallery";

export default async function Galeria() {
    const dict = await getDictionary('pt-BR');

    return (
        <main>
            <div>
                <Header>
                    Galeria de <span className="text-primary">fotos</span>
                </Header>
            </div>

            <div className="flex flex-col gap-16 mb-20">
                <PhotoGallery dict={dict}/>
            </div>
        </main>
    );
}