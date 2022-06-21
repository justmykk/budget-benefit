import './App.css'
import { useAppContext } from './AppContext'
import { Project } from './components/Project'
import { maxBudget } from './constants'

function App() {
    const { sum, projects, onSelectProject } = useAppContext()

    return (
        <div className="App">
            <input disabled value={maxBudget} />

            <p>
                Sum: {sum}{' '}
                {sum > maxBudget && (
                    <span>is more than the budget {maxBudget}</span>
                )}
            </p>

            <div className="Project-Container">
                {projects.map((item) => (
                    <div key={item.name} onClick={() => onSelectProject(item)}>
                        <Project project={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
