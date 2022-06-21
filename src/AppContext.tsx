import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { allProjects, maxBudget, IProject } from './constants'

interface ContextState {
    projects: IProject[]
    sum: number
    onSelectProject: (p0: IProject) => void
    isSelected: (p0: IProject) => boolean
}

export const AppContext = createContext<ContextState>({} as ContextState)

export const AppContextProvider: FC<{ children?: ReactNode }> = ({
    children,
}) => {
    const [projects, setProjects] = useState<IProject[]>([])
    const [selectedProjects, setSelectedProjects] = useState<IProject[]>([])

    const sum = useMemo(
        () => selectedProjects.reduce((a, b) => a + b.budget, 0),
        [selectedProjects]
    )

    const onSelectProject = (item: IProject) => {
        if (isSelected(item)) {
            const filtered = selectedProjects.filter(
                (value) => value.name !== item.name
            )
            setSelectedProjects([...filtered])
        } else {
            setSelectedProjects([...selectedProjects, item])
        }
    }

    const isSelected = (item: IProject): boolean => {
        return !!selectedProjects.find((value) => item.name === value.name)
    }

    useEffect(() => {
        const filtered = allProjects.filter((item) => item.budget <= maxBudget)
        setProjects([...filtered])
    }, [])

    return (
        <AppContext.Provider
            value={{ projects, sum, onSelectProject, isSelected }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): ContextState => {
    return useContext(AppContext)
}
