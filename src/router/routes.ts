import { RouteRecordRaw } from 'vue-router';
import AuthRoutes from './modules/auth';
import AppRoutes from './modules/app';
import ErrorsRoutes from './modules/errors';

const routes: RouteRecordRaw[] = [];

const allRoutes:RouteRecordRaw[] = routes.concat(AppRoutes, AuthRoutes, ErrorsRoutes);

export default allRoutes;
