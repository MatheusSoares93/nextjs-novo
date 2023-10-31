import Image from 'next/image'
import MinhaImage from './perfil.jpg'

export default function Produtos(){
    return(
        <section className="flex  justify-center p-10">

  <article className="flex w-2/5 border-2 shadow-2xl items-center">
    <div className="bg-white w-2/5 h-44 p-10">
        <Image
            src={MinhaImage}
            width={500}
            height={500}
            alt="Picture of the Author"
            />
    </div>
    <div className="bg-white p-10">
      <h2>Produto</h2>
      <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore unde fugit asperiores autem quis! Fuga eum suscipit, voluptatem autem quos vitae iure. Illum molestiae quam id vero porro magni?</p>
    </div>
  </article>

  <article className="flex w-2/5 border-2 shadow-2xl items-center">
    <div className="bg-white w-2/5 h-44 p-10">
    <Image
            src={MinhaImage}
            width={500}
            height={500}
            alt="Picture of the Author"
            /> 
    </div>
    <div className="bg-white p-10">
      <h2>Produto</h2>
      <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore unde fugit asperiores autem quis! Fuga eum suscipit, voluptatem autem quos vitae iure. Illum molestiae quam id vero porro magni?</p>
    </div>
  </article>

</section>
    )
}