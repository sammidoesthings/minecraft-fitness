import React from 'react';
import ExampleClasses from './ExampleClasses'

const ClassCard = ()=>{
    console.log(ExampleClasses)
    return (
        <div className="class-card-container">
            I am a class card!
            I include the edit form: <ClassEditCard/>
        {/* CLASS CARD CONTAINER ENDS HERE */}
        </div>
    )
}

const ClassEditCard = ()=>{
    return (
        <div className="class-edit-container">
            I am the class card EDIT form! I look like the class card but have field input options for changes to be made.
            {/* CLASS EDIT CONTAINER ENDS HERE  */}
        </div>
    )
}

export { ClassCard, ClassEditCard }