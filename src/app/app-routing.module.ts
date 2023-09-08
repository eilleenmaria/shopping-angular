import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI
import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants/routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { DashboardModule } from '@modules/dashboard/dashboard.module';


const routes: Routes = [
  {
		path: EMPTY_STRING,
		component: SkeletonComponent,
		children: [
			{
				path: INTERNAL_PATHS.CARIBBEAN_DEFAULT,
				loadChildren: () => import('@modules/dashboard/dashboard.module').then((m): typeof DashboardModule => m.DashboardModule),
			},

			{ path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
		],
	},
	{ path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
