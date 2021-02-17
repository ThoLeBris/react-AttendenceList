const List = ({student}) => {
    return(
        <>
        {student.map((eleve)=>{
            const {id, name, attendance} = eleve;
            // ? Affichage d'un seul éleve / élément avec le return à l'intérieur
                return (
                    <article className="student" key={id}>
                        <div>
                            <h4>{name}</h4>
                            <p className= {attendance ? 'present' : 'absent'}>{attendance ? 'Présent' : 'Absent'}</p>
                        </div>
                    </article>
                )
        })}
        </>
    )
}

export default List
