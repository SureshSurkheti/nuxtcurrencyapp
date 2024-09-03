export default defineEventHandler((event) => {
    // const  name = event.context.params.name;
    // const job = event.context.params.job;

    //another method

    const name = getRouterParam(event, 'name');
    const job = getRouterParam(event, 'job');

    const info = {
        name: name,
        job: job,
    }

    return info;
})