export const maxBudget = 400

export const allProjects = [
    {
        name: 'Project 1',
        budget: 300,
        benefit: 0,
    },
    {
        name: 'Project 2',
        budget: 100,
        benefit: 1,
    },
    {
        name: 'Project 3',
        budget: 200,
        benefit: 2,
    },
    {
        name: 'Project 4',
        budget: 400,
        benefit: 3,
    },
    {
        name: 'Project 5',
        budget: 500,
        benefit: 4,
    },
    {
        name: 'Project 6',
        budget: 800,
        benefit: 5,
    },
    {
        name: 'Project 7',
        budget: 1000,
        benefit: 6,
    },
    {
        name: 'Project 8',
        budget: 50,
        benefit: 7,
    },
    {
        name: 'Project 9',
        budget: 2000,
        benefit: 8,
    },
    {
        name: 'Project 10',
        budget: 150,
        benefit: 9,
    },
    {
        name: 'Project 11',
        budget: 5000,
        benefit: 10,
    },
]

export interface IProject {
    name: string
    budget: number
    benefit: number
}
