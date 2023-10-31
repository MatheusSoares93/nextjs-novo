export default function Footer (){
    return(

    <>
    <div className="flex bg-black w-full">
    <article className="text-amber-500 w-1/4 pb-8 pl-20">
      <h1 className="pt-20 pl-10">Titulo</h1>
      <br />
      <hr />
      <p className="text-white pt-4 pl-10 pr-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, maiores culpa sit voluptas fugiat est nesciunt magni nihil error, excepturi quasi reiciendis dolorum numquam cum voluptatum commodi porro itaque minima?</p>
    </article>

    <article className="w-1/4 pb-8">
      <h1 className="pt-8 pl-28 text-white">Useful Links</h1>
      <ul className="pt-8 pl-4">
        <li className="pt-4 pl-28 text-white">Link1</li>
        <li className="pt-4 pl-28 text-white">Link2</li>
        <li className="pt-4 pl-28 text-white">Link3</li>
        <li className="pt-4 pl-28 text-white">Link4</li>
        <li className="pt-4 pl-28 text-white">Link5</li>
      </ul>
    </article>

    <article className="w-1/4 pb-8">
      <h1 className="pt-8 pl-4 text-white">Links</h1>
      <ul className="pt-8 pl-8">
        <li className="pt-4 pl-0 text-white">Link1</li>
        <li className="pt-4 pl-0 text-white">Link2</li>
        <li className="pt-4 pl-0 text-white">Link3</li>
        <li className="pt-4 pl-0 text-white">Link4</li>
        <li className="pt-4 pl-0 text-white">Link5</li>
      </ul>
    </article>

    <article className="w-1/4 pb-8 ">
      <h1 className="pt-0 pl-4 bg-white w-52 h-10">Envie seu e-mail <button className="pt-0 pl-4 bg-amber-500">Enviar</button></h1>
    </article>

    </div>
    </>
    )
}