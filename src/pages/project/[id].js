import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import '../../configureAmplify'
import { listMGDProjects, getMGDProject } from '../../graphql/queries'

export default function Project({ project }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1 className="text-5xl mt-4 font-semibold tracking-wide">{project.title}</h1>
            <p className="text-sm font-light my-4">by {project.username}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const projectData = await API.graphql({
        query: listprojects
    })
    const paths = projectData.data.listprojects.items.map(project => ({ params: { id: project.id } }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { id } = params
    const projectData = await API.graphql({
        query: getproject, variables: { id }
    })
    return {
        props: {
            project: projectData.data.getproject
        }
    }
}