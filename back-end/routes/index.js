import router from "./api/api.js";
const routeNames = ["api"];

const routes = routeNames.map((name) => ({
  path: `/${name}`,
  router: router.use(()=>`./${name}/${name}`),
}));

export default routes
