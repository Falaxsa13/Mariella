import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Styles } from "../styles/styles";
import routes from "./router.config";

const Router = () => {
    return (
        <Suspense fallback={null}>
            <Styles />
            <Switch>
                {routes.map((routeItem) => {
                    return (
                        <Route
                            key={routeItem.component}
                            path={routeItem.path}
                            exact={routeItem.exact}
                            component={lazy(
                                () => import(`../pages/${routeItem.component}`),
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    );
};

export default Router;
