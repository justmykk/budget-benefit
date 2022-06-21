import { FC } from 'react'
import { useAppContext } from '../AppContext'
import { IProject } from '../constants'

export const Project: FC<{ project: IProject }> = ({ project }) => {
    const { isSelected } = useAppContext()

    return (
        <div className={`project ${isSelected(project) && 'selected-project'}`}>
            <p>Name: {project.name}</p>
            <p>Budget: {project.budget}</p>
            <p>Benefit: {project.benefit}</p>
        </div>
    )
}
