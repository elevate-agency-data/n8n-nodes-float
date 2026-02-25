import {
	ApplicationError,
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	NodeApiError,
  NodeConnectionTypes,
	NodeOperationError
} from 'n8n-workflow';

export class Float implements INodeType {
	description: INodeTypeDescription = {
		name: 'float',
		displayName: 'Float',
		group: ['transform'],
		version: 1,
		description: 'Use the Float API',
    defaults:{ name: 'Float' },
		icon: 'file:float.svg',
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		credentials: [{	name: 'floatApi', required: true}],
		properties: [
			{
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          { name: 'Account', value: 'accounts', description: 'Manage accounts' },
          { name: 'Allocation', value: 'allocations', description: 'Manage allocations' },
          { name: 'Client', value: 'clients', description: 'Manage clients' },
          { name: 'Department', value: 'departments', description: 'Manage departments' },
          { name: 'Logged Time', value: 'loggedTimes', description: 'Manage logged times' },
          { name: 'Milestone', value: 'milestones', description: 'Manage milestones' },
          { name: 'Person', value: 'people', description: 'Manage people' },
          { name: 'Phase', value: 'phases', description: 'Manage phases' },
          { name: 'Project', value: 'projects', description: 'Manage projects' },
          { name: 'Project Expense', value: 'projectExpenses', description: 'Manage project expenses' },
          { name: 'Project Stage', value: 'projectStages', description: 'Manage project stages' },
          { name: 'Project Task', value: 'projectTasks', description: 'Manage project tasks' },
          { name: 'Public Holiday', value: 'publicHolidays', description: 'Manage public holidays' },
          { name: 'Report', value: 'reports', description: 'Manage reports' },
          { name: 'Role', value: 'roles', description: 'Manage roles' },
          { name: 'Status', value: 'statuses', description: 'Manage statuses' },
          { name: 'Team Holiday', value: 'teamHolidays', description: 'Manage team holidays' },
          { name: 'Time Off', value: 'timeOffs', description: 'Manage times off' },
          { name: 'Time Off Type', value: 'timeOffTypes', description: 'Manage time off types' }
        ],
        default: 'accounts',
        required: true,
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['accounts'] } },
        options: [
          { name: 'Get Account', value: 'accountsGet', action: 'Gets accounts', description: 'Gets accounts' },
          { name: 'List Accounts', value: 'accountsListGet', action: 'Lists accounts', description: 'Lists accounts' }
        ],
        default: 'accountsGet',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['allocations'] } },
        options: [
          { name: 'Add Allocation', value: 'allocationsAddPost', action: 'Adds a new allocation as a task', description: 'Adds a new allocation as a task' },
          { name: 'Delete Allocation', value: 'allocationsDelete', action: 'Deletes an allocation as a task', description: 'Deletes an allocation as a task' },
          { name: 'Get Allocation', value: 'allocationsGet', action: 'Retrieves a single allocation as a task', description: 'Retrieves a single allocation as a task' },
          { name: 'List Allocations', value: 'allocationsListGet', action: 'Lists allocations as tasks', description: 'Lists allocations as tasks' },
          { name: 'Update Allocation', value: 'allocationsPatch', action: 'Updates an allocations details as a task', description: 'Updates an allocations details as a task' }
        ],
        default: 'allocationsAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['clients'] } },
        options: [
          { name: 'Add Client', value: 'clientsAddPost', action: 'Adds a new client', description: 'Adds a new client' },
          { name: 'Delete Client', value: 'clientsDelete', action: 'Deletes a client', description: 'Deletes a client' },
          { name: 'Get Client', value: 'clientsGet', action: 'Retrieves a single client', description: 'Retrieves a single client' },
          { name: 'List Clients', value: 'clientsListGet', action: 'Lists clients', description: 'Lists clients' },
          { name: 'Update Client', value: 'clientsPatch', action: 'Updates a client name', description: 'Updates a client name' }
        ],
        default: 'clientsAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['departments'] } },
        options: [
          { name: 'Add Department', value: 'departmentsAddPost', action: 'Adds a new department', description: 'Adds a new department' },
          { name: 'Delete Department', value: 'departmentsDelete', action: 'Deletes a department', description: 'Deletes a department' },
          { name: 'Get Department', value: 'departmentsGet', action: 'Retrieves a single department', description: 'Retrieves a single department' },
          { name: 'List Departments', value: 'departmentsListGet', action: 'Lists departments', description: 'Lists departments' },
          { name: 'Update Department', value: 'departmentsPatch', action: 'Updates a department details', description: 'Updates a department details' }
        ],
        default: 'departmentsAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['loggedTimes'] } },
        options: [
          { name: 'Add Log Time', value: 'loggedTimesAddPost', action: 'Adds a log time for a person', description: 'Adds a log time for a person' },
          { name: 'Delete Logged Time', value: 'loggedTimesDelete', action: 'Deletes an existing logged time entry', description: 'Deletes an existing logged time entry' },
          { name: 'Get Logged Time', value: 'loggedTimesGet', action: 'Retrieves a single logged time entry', description: 'Retrieves a single logged time entry' },
          { name: 'List Logged Times', value: 'loggedTimesListGet', action: 'Lists logged time for a project or person', description: 'Lists logged time for a project or person' },
          { name: 'Update Logged Time', value: 'loggedTimesPatch', action: 'Updates an existing logged time entry', description: 'Updates an existing logged time entry' }
        ],
        default: 'loggedTimesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['milestones'] } },
        options: [
          { name: 'Add Milestone', value: 'milestonesAddPost', action: 'Adds a new project milestone', description: 'Adds a new project milestone' },
          { name: 'Delete Milestone', value: 'milestonesDelete', action: 'Deletes a milestone', description: 'Deletes a milestone' },
          { name: 'Get Milestone', value: 'milestonesGet', action: 'Retrieves a single project milestone', description: 'Retrieves a single project milestone' },
          { name: 'List Milestones', value: 'milestonesListGet', action: 'Lists project milestones', description: 'Lists project milestones' },
          { name: 'Update Milestone', value: 'milestonesPatch', action: 'Updates a milestone details', description: 'Updates a milestone details' }
        ],
        default: 'milestonesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['people'] } },
        options: [
          { name: 'Add Person', value: 'peopleAddPost', action: 'Adds a new person', description: 'Adds a new person' },
          { name: 'Delete Person', value: 'peopleDelete', action: 'Deletes a person', description: 'Deletes a person' },
          { name: 'Get Person', value: 'peopleGet', action: 'Retrieves a single person', description: 'Retrieves a single person' },
          { name: 'List People', value: 'peopleListGet', action: 'Lists people', description: 'Lists people' },
          { name: 'Update Person', value: 'peoplePatch', action: 'Updates a person details', description: 'Updates a person details' }
        ],
        default: 'peopleAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['phases'] } },
        options: [
          { name: 'Add Phase', value: 'phasesAddPost', action: 'Adds a new phase', description: 'Adds a new phase' },
          { name: 'Delete Phase', value: 'phasesDelete', action: 'Deletes a phase', description: 'Deletes a phase' },
          { name: 'Get Phase', value: 'phasesGet', action: 'Retrieves a single phase', description: 'Retrieves a single phase' },
          { name: 'List Phases', value: 'phasesListGet', action: 'Lists phases', description: 'Lists phases' },
          { name: 'Update Phase', value: 'phasesPatch', action: 'Updates a phase details', description: 'Updates a phase details' }
        ],
        default: 'phasesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['projects'] } },
        options: [
          { name: 'Add Project', value: 'projectsAddPost', action: 'Adds a new project', description: 'Adds a new project' },
          { name: 'Delete Project', value: 'projectsDelete', action: 'Deletes a project', description: 'Deletes a project' },
          { name: 'Get Project', value: 'projectsGet', action: 'Retrieves a single project', description: 'Retrieves a single project' },
          { name: 'List Projects', value: 'projectsListGet', action: 'Lists projects', description: 'Lists projects' },
          { name: 'Update Project', value: 'projectsPatch', action: 'Updates a project details', description: 'Updates a project details' }
        ],
        default: 'projectsAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['projectExpenses'] } },
        options: [
          { name: 'Add Project Expense', value: 'projectExpensesAddPost', action: 'Creates a project expense', description: 'Creates a project expense' },
          { name: 'Delete Project Expense', value: 'projectExpensesDelete', action: 'Deletes a project expense', description: 'Deletes a project expense' },
          { name: 'Get Project Expense', value: 'projectExpensesGet', action: 'Retrieves a single project expense', description: 'Retrieves a single project expense' },
          { name: 'List Project Expenses', value: 'projectExpensesListGet', action: 'Lists project expenses', description: 'Lists project expenses' },
          { name: 'Update Project Expense', value: 'projectExpensesPatch', action: 'Updates a project expense', description: 'Updates a project expense' }
        ],
        default: 'projectExpensesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['projectStages'] } },
        options: [
          { name: 'Add Project Stage', value: 'projectStagesAddPost', action: 'Adds a project stage', description: 'Adds a project stage' },
          { name: 'Delete Project Stage', value: 'projectStagesDelete', action: 'Deletes a project stage', description: 'Deletes a project stage' },
          { name: 'Get Project Stage', value: 'projectStagesGet', action: 'Retrieves a single project stage', description: 'Retrieves a single project stage' },
          { name: 'List Project Stages', value: 'projectStagesListGet', action: 'Lists project stages', description: 'Lists project stages' },
          { name: 'Update Project Stage', value: 'projectStagesPatch', action: 'Updates a project stage', description: 'Updates a project stage' }
        ],
        default: 'projectStagesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['projectTasks'] } },
        options: [
          { name: 'Add Project Task', value: 'projectTasksAddPost', action: 'Adds a project task', description: 'Adds a project task' },
          { name: 'Delete Project Task', value: 'projectTasksDelete', action: 'Deletes a project task', description: 'Deletes a project task' },
          { name: 'Get Project Task', value: 'projectTasksGet', action: 'Retrieves a single project task', description: 'Retrieves a single project task' },
          { name: 'List Project Tasks', value: 'projectTasksListGet', action: 'Lists project tasks', description: 'Lists project tasks' },
          { name: 'Merge Project Tasks', value: 'projectTasksMergePost', action: 'Merges project tasks', description: 'Merges project tasks' },
          { name: 'Update Project Task', value: 'projectTasksPatch', action: 'Updates a project task', description: 'Updates a project task' }
        ],
        default: 'projectTasksAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['publicHolidays'] } },
        options: [
          { name: 'Get Public Holiday', value: 'publicHolidaysGet', action: 'Retrieves a single public holiday', description: 'Retrieves a single public holiday' },
          { name: 'List Public Holidays', value: 'publicHolidaysListGet', action: 'Lists public holidays', description: 'Lists public holidays' }
        ],
        default: 'publicHolidaysGet',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['reports'] } },
        options: [
          { name: 'Get Report Data For A List of People', value: 'reportsDataForAlistOfPeopleGet', action: 'Retrieves report data for a list of people', description: 'Retrieves report data for a list of people' },
          { name: 'Get Report Data For A List of Projects', value: 'reportsDataForAlistOfProjectsGet', action: 'Retrieves report data for a list of projects', description: 'Retrieves report data for a list of projects' }
        ],
        default: 'reportsDataForAlistOfPeopleGet',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['roles'] } },
        options: [
          { name: 'Add Role', value: 'rolesAddPost', action: 'Adds a new role', description: 'Adds a new role' },
          { name: 'Delete Role', value: 'rolesDelete', action: 'Deletes a role', description: 'Deletes a role' },
          { name: 'Get Role', value: 'rolesGet', action: 'Retrieves a single role', description: 'Retrieves a single role' },
          { name: 'List Roles', value: 'rolesListGet', action: 'Lists roles', description: 'Lists roles' },
          { name: 'Update Role', value: 'rolesPatch', action: 'Updates a role', description: 'Updates a role' }
        ],
        default: 'rolesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['statuses'] } },
        options: [
          { name: 'Add Status', value: 'statusesAddPost', action: 'Adds a new status', description: 'Adds a new status' },
          { name: 'Delete Status', value: 'statusesDelete', action: 'Deletes a status', description: 'Deletes a status' },
          { name: 'Get Status', value: 'statusesGet', action: 'Retrieves a single status', description: 'Retrieves a single status' },
          { name: 'List Statuses', value: 'statusesListGet', action: 'Lists statuses', description: 'Lists statuses' },
          { name: 'Update Status', value: 'statusesPatch', action: 'Updates a status', description: 'Updates a status' }
        ],
        default: 'statusesAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['teamHolidays'] } },
        options: [
          { name: 'Add Team Holiday', value: 'teamHolidaysAddPost', action: 'Creates a new team holiday', description: 'Creates a new team holiday' },
          { name: 'Delete Team Holiday', value: 'teamHolidaysDelete', action: 'Deletes a team holiday', description: 'Deletes a team holiday' },
          { name: 'Get Team Holiday', value: 'teamHolidaysGet', action: 'Retrieves a single team holiday', description: 'Retrieves a single team holiday' },
          { name: 'List Team Holidays', value: 'teamHolidaysListGet', action: 'Lists team holidays', description: 'Lists team holidays' },
          { name: 'Update Team Holiday', value: 'teamHolidaysPatch', action: 'Updates a team holiday', description: 'Updates a team holiday' }
        ],
        default: 'teamHolidaysAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['timeOffs'] } },
        options: [
          { name: 'Add Time Off', value: 'timeOffsAddPost', action: 'Adds a new time off', description: 'Adds a new time off' },
          { name: 'Delete Time Off', value: 'timeOffsDelete', action: 'Deletes a time off record', description: 'Deletes a time off record' },
          { name: 'Get Time Off', value: 'timeOffsGet', action: 'Retrieves a single time off', description: 'Retrieves a single time off' },
          { name: 'List Time Offs', value: 'timeOffsListGet', action: 'Lists of time off scheduled', description: 'Lists of time off scheduled' },
          { name: 'Update Time Off', value: 'timeOffsPatch', action: 'Updates a time off', description: 'Updates a time off' }
        ],
        default: 'timeOffsAddPost',
      },
			{
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['timeOffTypes'] } },
        options: [
          { name: 'Add Time Off Type', value: 'timeOffTypesAddPost', action: 'Adds a new time off type', description: 'Adds a new time off type' },
          { name: 'Get Time Off Type', value: 'timeOffTypesGet', action: 'Retrieves a single time off type', description: 'Retrieves a single time off type' },
          { name: 'List Time Off Types', value: 'timeOffTypesListGet', action: 'Lists of time off types', description: 'Lists of time off types' },
          { name: 'Update Time Off Type', value: 'timeOffTypesPatch', action: 'Updates a time off type details', description: 'Updates a time off type details' }
        ],
        default: 'timeOffTypesAddPost',
      },
      {
        displayName: 'Account ID',
        name: 'account_id',
        description: 'Identifier of an account',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'accountsGet'
        ] } }
      },
      {
        displayName: 'Client ID',
        name: 'client_id',
        description: 'Identifier of a client',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'clientsDelete',
					'clientsGet',
					'clientsPatch'
        ] } }
      },
      {
        displayName: 'Department ID',
        name: 'department_id',
        description: 'Identifier of a department',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'departmentsDelete',
					'departmentsGet',
					'departmentsPatch'
        ] } }
      },			
      {
        displayName: 'Holiday ID',
        name: 'holiday_id',
        description: 'Identifier of a holiday',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'teamHolidaysDelete',
					'teamHolidaysGet',
					'teamHolidaysPatch'
        ] } }
      },
      {
        displayName: 'Logged Time ID',
        name: 'logged_time_id',
        description: 'Identifier of a logged time',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'loggedTimesDelete',
					'loggedTimesGet',
					'loggedTimesPatch'
        ] } }
      },
      {
        displayName: 'Milestone ID',
        name: 'milestone_id',
        description: 'Identifier of a milestone',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'milestonesDelete',
					'milestonesGet',
					'milestonesPatch'
        ] } }
      },
      {
        displayName: 'People ID',
        name: 'people_id',
        description: 'Identifier of a person',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'peopleDelete',
					'peopleGet',
					'peoplePatch'
        ] } }
      },
      {
        displayName: 'Phase ID',
        name: 'phase_id',
        description: 'Identifier of a phase',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'phasesDelete',
					'phasesGet',
					'phasesPatch'
        ] } }
      },
      {
        displayName: 'Project ID',
        name: 'project_id',
        description: 'Identifier of a project',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'projectsDelete',
					'projectsGet',
					'projectsPatch'
        ] } }
      },
      {
        displayName: 'Project Expense ID',
        name: 'project_expense_id',
        description: 'Identifier of a project expense',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'projectExpensesDelete',
					'projectExpensesGet',
					'projectExpensesPatch'
        ] } }
      },
      {
        displayName: 'Project Stage ID',
        name: 'project_stage_id',
        description: 'Identifier of a project stage',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'projectStagesDelete',
					'projectStagesGet',
					'projectStagesPatch'
        ] } }
      },
      {
        displayName: 'Project Task ID',
        name: 'project_task_id',
        description: 'Identifier of a project task',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'projectTasksDelete',
					'projectTasksGet',
					'projectTasksPatch'
        ] } }
      },
      {
        displayName: 'Public Holiday ID',
        name: 'public_holiday_id',
        description: 'Identifier of a public holiday',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'publicHolidaysGet'
        ] } }
      },
      {
        displayName: 'Role ID',
        name: 'role_id',
        description: 'Identifier of a role',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'rolesDelete',
					'rolesGet',
					'rolesPatch'
        ] } }
      },
      {
        displayName: 'Status ID',
        name: 'status_id',
        description: 'Identifier of a status',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'statusesDelete',
					'statusesGet',
					'statusesPatch'
        ] } }
      },
      {
        displayName: 'Task ID',
        name: 'task_id',
        description: 'Identifier of a task',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'allocationsDelete',
					'allocationsGet',
					'allocationsPatch'
        ] } }
      },
      {
        displayName: 'Time Off ID',
        name: 'timeoff_id',
        description: 'Identifier of a time off',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
          'timeOffsDelete',
					'timeOffsGet',
					'timeOffsPatch'
        ] } }
      },
      {
        displayName: 'Time Off Type ID',
        name: 'timeoff_type_id',
        description: 'Identifier of a time off type',
        type: 'string',
        default: '',
        displayOptions:{ show:{ operation:[
					'timeOffTypesGet',
					'timeOffTypesPatch'
        ] } }
      },
      {
        displayName: 'Query Parameters',
        name: 'queryParameters',
        type: 'collection',
        placeholder: 'Add Query Parameters',
        default:{},
        options:[
					{
            displayName: 'Active',
            name: 'active',
            description: 'Filter only on 0 = non-active or 1 = active entities in the response',
						type: 'options',
						options: [
							{ name: 'Active', value: 1},
							{ name: 'Non Active', value: 0}
						],
						default: 1
					},
					{
            displayName: 'Billable',
            name: 'billable',
            description: 'Filter response on 0 = non-billable or 1 = billable',
						type: 'options',
						options: [
							{ name: 'Billable', value: 1},
							{ name: 'Non Billable', value: 0}
						],
						default: 1
					},
          {
            displayName: 'Client ID',
            name: 'client_id',
            description: 'A client ID associated with projects to filter the response on',
            type: 'string',
            default: ''
          },
          {
            displayName: 'End Date',
            name: 'end_date',
            description: 'End of date range in format YYYY-MM-DD (must be used together with start_date, will be inclusive of repeat_end_date date)',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Expand',
            name: 'expand',
            description: 'Use people_id to return an additional people_id field that can reference a record on /people, or null if a guest',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Fields',
            name: 'fields',
            description: 'Comma-delimited set of fields to include in the response',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Full Day',
            name: 'full_day',
            description: 'Filter only on if timeoff is full day: 1 = Yes, 0 = No',
            type: 'options',
						options: [
							{ name: 'No', value: 0},
							{ name: 'Yes', value: 1}
						],
						default: 0
					},
          {
            displayName: 'Modified Since',
            name: 'modified_since',
            description: 'Datetime in either YYYY-MM-DD hh:mm:ss or as a Unix timestamp in seconds to filter on all records with an equal or later modified timestamp',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Page',
            name: 'page',
            description: 'The page number of the page of results to return, default 1',
            type: 'number',
            default: 1
          },
          {
            displayName: 'People ID',
            name: 'people_id',
            description: 'A people ID to filter the response on',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Per Page',
            name: 'per-page',
            description: 'The number of items per page, default is 50',
            type: 'number',
            default: 50
          },
          {
            displayName: 'Phase ID',
            name: 'phase_id',
            description: 'A phase ID associated with a project to filter the response on',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Project Code',
            name: 'project_code',
            description: 'Case-insensitive, URL encoded match of a project code to filter the list response to a single project',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Project ID',
            name: 'project_id',
            description: 'A project ID to filter the response on',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Region',
            name: 'region',
            description: 'Filter results by one or more specific region ID (comma-separated)',
            type: 'string',
            default: ''
          },
					{
            displayName: 'Repeat State',
            name: 'repeat_state',
            description: 'Filter response on the repeat state (0 = no repeat, 1 = weekly, 2 = monthly, 3 = every two weeks, 4 = every three weeks, 5 = every six weeks, 6 = every two months, 7 = every three months, 8 = every six months, 9 = yearly)',
						type: 'options',
						options: [
							{ name: 'Every Six Months', value: 8},
							{ name: 'Every Six Weeks', value: 5},
							{ name: 'Every Three Months', value: 7},
							{ name: 'Every Three Weeks', value: 4},
							{ name: 'Every Two Months', value: 6},
							{ name: 'Every Two Weeks', value: 3},
							{ name: 'Monthly', value: 2},
							{ name: 'No Repeat', value: 0},
							{ name: 'Weekly', value: 1},
							{ name: 'Yearly', value: 9},
						],
						default: 1
					},
          {
            displayName: 'Sort',
            name: 'sort',
            description: 'A field to sort the list values in the response, ascending (default), pre-fix - to apply descending',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Start Date',
            name: 'start_date',
            description: 'Start of date range in format YYYY-MM-DD (must be used together with end_date)',
            type: 'string',
            default: ''
          },
					{
            displayName: 'Status',
            name: 'status',
            description: 'Filter response on the Status (1 = tentative, 2 = confirmed, 3 = complete)',
						type: 'options',
						options: [
							{ name: 'Complete', value: 3},
							{ name: 'Confirmed', value: 2},
							{ name: 'Tentative', value: 1}
						],
						default: 1
					},
          {
            displayName: 'Tag Name',
            name: 'tag_name',
            description: 'Case-insensitive, URL encoded, exact text match of tag names to filter the response on (comma-delimited values will return all matching records)',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Task Meta ID',
            name: 'task_meta_id',
            description: 'A project task ID to filter the response on',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Timeoff Type ID',
            name: 'timeoff_type_id',
            description: 'Filter on the ID of the timeoff type',
            type: 'string',
            default: ''
          },
          {
            displayName: 'Year',
            name: 'year',
            description: 'Returns all results in the given year in format YYYY (default if omitted is the current year, overridden by start_date and end_date parameters)',
            type: 'string',
            default: ''
          }
        ]
      },
      {
        displayName: 'Request Body',
        name: 'requestBody',
        type: 'json',
	      default: '{}',
        displayOptions:{ show:{ operation:[
					'allocationsAddPost',
					'allocationsPatch',
					'clientsAddPost',
					'clientsPatch',
					'departmentsAddPost',
					'departmentsPatch',
					'loggedTimesAddPost',
					'loggedTimesPatch',
					'milestonesAddPost',
					'milestonesPatch',
					'peopleAddPost',
					'peoplePatch',
					'phasesAddPost',
					'phasesPatch',
					'projectsAddPost',
					'projectsPatch',
					'projectExpensesAddPost',
					'projectExpensesPatch',
					'projectStagesAddPost',
					'projectStagesPatch',
					'projectTasksAddPost',
					'projectTasksPatch',
					'projectTasksMergePost',
					'rolesAddPost',
					'rolesPatch',
					'statusesAddPost',
					'statusesPatch',
					'teamHolidaysAddPost',
					'teamHolidaysPatch',
					'timeOffsAddPost',
					'timeOffsPatch',
					'timeOffTypesAddPost',
					'timeOffTypesPatch'
				] } }
     }
		]
	};

	async execute(this: IExecuteFunctions) {
		const items = this.getInputData();
		const returnData = [];

		const credentials = await this.getCredentials('floatApi');
    const { floatAccessToken } = credentials as { floatAccessToken: string };
    if (!floatAccessToken) { throw new ApplicationError('Missing Float Access Token.'); }

		for (let i = 0; i < items.length; i++) {
			try {

				const operation = this.getNodeParameter('operation', i, '') as string;
				const resource = this.getNodeParameter('resource', i, '') as string;
				const account_id = this.getNodeParameter('account_id', i, '') as string;
				const client_id = this.getNodeParameter('client_id', i, '') as string;
				const department_id = this.getNodeParameter('department_id', i, '') as string;
				const holiday_id = this.getNodeParameter('holiday_id', i, '') as string;
				const logged_time_id = this.getNodeParameter('logged_time_id', i, '') as string;
				const milestone_id = this.getNodeParameter('milestone_id', i, '') as string;
				const people_id = this.getNodeParameter('people_id', i, '') as string;
				const phase_id = this.getNodeParameter('phase_id', i, '') as string;
				const project_id = this.getNodeParameter('project_id', i, '') as string;
				const project_expense_id = this.getNodeParameter('project_expense_id', i, '') as string;
				const project_stage_id = this.getNodeParameter('project_stage_id', i, '') as string;
				const project_task_id = this.getNodeParameter('project_task_id', i, '') as string;
				const public_holiday_id = this.getNodeParameter('public_holiday_id', i, '') as string;
				const role_id = this.getNodeParameter('role_id', i, '') as string;
				const status_id = this.getNodeParameter('status_id', i, '') as string;
				const task_id = this.getNodeParameter('task_id', i, '') as string;
				const timeoff_id = this.getNodeParameter('timeoff_id', i, '') as string;
				const timeoff_type_id = this.getNodeParameter('timeoff_type_id', i, '') as string;
				const queryParameters = this.getNodeParameter('queryParameters', i, {}) as Record<string, string | number | boolean>;
				const requestBody = this.getNodeParameter('requestBody', i, '') as string;

				let url = `https://api.float.com/v3`;

				const queryParams = new URLSearchParams();
				Object.entries(queryParameters).forEach(([key, value]) => {
					if (value !== ''){
						if (value === false || value === true) {
							value = +value;
						}
						queryParams.append(decodeURIComponent(key), String(value));
					}
				});

				const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';

				switch (resource) {
					case 'accounts':
						switch (operation) {
						case 'accountsGet':
							if(account_id == '') { throw new ApplicationError('Action ID is required'); }
							url += `/accounts/${account_id}${queryString}`;
							break;
						case 'accountsListGet':
							url += `/accounts${queryString}`;
							break;
						}
						break;						
					case 'allocations':
						switch (operation) {
						case 'allocationsAddPost':
						case 'allocationsListGet':
							url += `/tasks${queryString}`;
							break;
						case 'allocationsDelete':
						case 'allocationsGet':
						case 'allocationsPatch':
							if(task_id == '') { throw new ApplicationError('Task ID is required'); }
							url += `/tasks/${task_id}${queryString}`;
							break;
						}
						break;
					case 'clients':
						switch (operation) {
						case 'clientsAddPost':
						case 'clientsListGet':
							url += `/clients${queryString}`;
							break;
						case 'clientsDelete':
						case 'clientsGet':
						case 'clientsPatch':
							if(client_id == '') { throw new ApplicationError('Client ID is required'); }
							url += `/clients/${client_id}${queryString}`;
							break;
						}
						break;	
					case 'departments':
						switch (operation) {
						case 'departmentsAddPost':
						case 'departmentsListGet':
							url += `/departments${queryString}`;
							break;
						case 'departmentsDelete':
						case 'departmentsGet':
						case 'departmentsPatch':
							if(department_id == '') { throw new ApplicationError('Department ID is required'); }
							url += `/departments/${department_id}${queryString}`;
							break;
						}
						break;			
					case 'loggedTimes':
						switch (operation) {
						case 'loggedTimesAddPost':
						case 'loggedTimesListGet':
							url += `/logged-time${queryString}`;
							break;
						case 'loggedTimesDelete':
						case 'loggedTimesGet':
						case 'loggedTimesPatch':
							if(logged_time_id == '') { throw new ApplicationError('Logged Time ID is required'); }
							url += `/logged-time/${logged_time_id}${queryString}`;
							break;
						}
						break;
					case 'milestones':
						switch (operation) {
						case 'milestonesAddPost':
						case 'milestonesListGet':
							url += `/milestones${queryString}`;
							break;
						case 'milestonesDelete':
						case 'milestonesGet':
						case 'milestonesPatch':
							if(milestone_id == '') { throw new ApplicationError('Milestone ID is required'); }
							url += `/milestones/${milestone_id}${queryString}`;
							break;
						}
						break;		
					case 'people':
						switch (operation) {
						case 'peopleAddPost':
						case 'peopleListGet':
							url += `/people${queryString}`;
							break;
						case 'peopleDelete':
						case 'peopleGet':
						case 'peoplePatch':
							if(people_id == '') { throw new ApplicationError('People ID is required'); }
							url += `/people/${people_id}${queryString}`;
							break;
						}
						break;
					case 'phases':
						switch (operation) {
						case 'phasesAddPost':
						case 'phasesListGet':
							url += `/phases${queryString}`;
							break;
						case 'phasesDelete':
						case 'phasesGet':
						case 'phasesPatch':
							if(phase_id == '') { throw new ApplicationError('Phases ID is required'); }
							url += `/phases/${phase_id}${queryString}`;
							break;
						}
						break;
					case 'projects':
						switch (operation) {
						case 'projectsAddPost':
						case 'projectsListGet':
							url += `/projects${queryString}`;
							break;
						case 'projectsDelete':
						case 'projectsGet':
						case 'projectsPatch':
							if(project_id == '') { throw new ApplicationError('Project ID is required'); }
							url += `/projects/${project_id}${queryString}`;
							break;
						}
						break;
					case 'projectExpenses':
						switch (operation) {
						case 'projectExpensesAddPost':
						case 'projectExpensesListGet':
							url += `/project-expenses${queryString}`;
							break;
						case 'projectExpensesDelete':
						case 'projectExpensesGet':
						case 'projectExpensesPatch':
							if(project_expense_id == '') { throw new ApplicationError('Project Expense ID is required'); }
							url += `/project-expenses/${project_expense_id}${queryString}`;
							break;
						}
						break;
					case 'projectStages':
						switch (operation) {
						case 'projectStagesAddPost':
						case 'projectStagesListGet':
							url += `/project-stages${queryString}`;
							break;
						case 'projectStagesDelete':
						case 'projectStagesGet':
						case 'projectStagesPatch':
							if(project_stage_id == '') { throw new ApplicationError('Project Stage ID is required'); }
							url += `/project-stages/${project_stage_id}${queryString}`;
							break;
						}
						break;
					case 'projectTasks':
						switch (operation) {
						case 'projectTasksAddPost':
						case 'projectTasksListGet':
							url += `/project-tasks${queryString}`;
							break;
						case 'projectTasksDelete':
						case 'projectTasksGet':
						case 'projectTasksPatch':
							if(project_task_id == '') { throw new ApplicationError('Project Task ID is required'); }
							url += `/project-tasks/${project_task_id}${queryString}`;
							break;
						case 'projectTasksMergePost':
							url += `/project-tasks/merge${queryString}`;
							break;
						}
						break;
					case 'publicHolidays':
						switch (operation) {
						case 'publicHolidaysListGet':
							url += `/public-holidays${queryString}`;
							break;
						case 'publicHolidaysGet':
							if(public_holiday_id == '') { throw new ApplicationError('Public Holiday ID is required'); }
							url += `/public-holidays/${public_holiday_id}${queryString}`;
							break;
						}
						break;
					case 'reports':
						switch (operation) {
						case 'reportsDataForAlistOfPeopleGet':
							url += `/reports/people${queryString}`;
							break;
						case 'reportsDataForAlistOfProjectsGet':
							url += `/reports/projects${queryString}`;
							break;
						}
						break;
					case 'roles':
						switch (operation) {
						case 'rolesAddPost':
						case 'rolesListGet':
							url += `/roles${queryString}`;
							break;
						case 'rolesDelete':
						case 'rolesGet':
						case 'rolesPatch':
							if(role_id == '') { throw new ApplicationError('Role ID is required'); }
							url += `/roles/${role_id}${queryString}`;
							break;
						}
						break;
					case 'statuses':
						switch (operation) {
						case 'statusesAddPost':
						case 'statusesListGet':
							url += `/status${queryString}`;
							break;
						case 'statusesDelete':
						case 'statusesGet':
						case 'statusesPatch':
							if(status_id == '') { throw new ApplicationError('Status ID is required'); }
							url += `/status/${status_id}${queryString}`;
							break;
						}
						break;
					case 'teamHolidays':
						switch (operation) {
						case 'teamHolidaysAddPost':
						case 'teamHolidaysListGet':
							url += `/holidays${queryString}`;
							break;
						case 'teamHolidaysDelete':
						case 'teamHolidaysGet':
						case 'teamHolidaysPatch':
							if(holiday_id == '') { throw new ApplicationError('Holiday ID is required'); }
							url += `/holidays/${holiday_id}${queryString}`;
							break;
						}
						break;
					case 'timeOffs':
						switch (operation) {
						case 'timeOffsAddPost':
						case 'timeOffsListGet':
							url += `/timeoffs${queryString}`;
							break;
						case 'timeOffsDelete':
						case 'timeOffsGet':
						case 'timeOffsPatch':
							if(timeoff_id == '') { throw new ApplicationError('Time Off ID is required'); }
							url += `/timeoffs/${timeoff_id}${queryString}`;
							break;
						}
						break;
					case 'timeOffTypes':
						switch (operation) {
						case 'timeOffTypesAddPost':
						case 'timeOffTypesListGet':
							url += `/timeoff-types${queryString}`;
							break;
						case 'timeOffTypesGet':
						case 'timeOffTypesPatch':
							if(timeoff_type_id == '') { throw new ApplicationError('Time Off Type ID is required'); }
							url += `/timeoff-types/${timeoff_type_id}${queryString}`;
							break;
						}
						break;
					default:
						throw new NodeOperationError(this.getNode(),`Unknown resource:${resource}`);
				}

				const httpMethod: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' =  operation.endsWith('Delete') ? 'DELETE' :
				                                                                 operation.endsWith('Remove') ? 'DELETE' :
																																			   operation.endsWith('Patch') ? 'PATCH' :
																																				 operation.endsWith('Put') ? 'PUT' :
																																				 operation.endsWith('Post') ? 'POST' : 'GET';

				let body;
				const headers = {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json',
					'Authorization': `Bearer ${floatAccessToken}`
				};

				if (!operation.includes('Delete') && ['DELETE', 'PATCH', 'POST', 'PUT'].includes(httpMethod)) {
					body = JSON.parse(requestBody);
				}

				const requestConf = {
					method: httpMethod,
					url,
					headers,
					...(body ? { body } : {}),
				};

				console.log('resource : ' + resource);
				console.log('operation : ' + operation);
				console.log('url : ' + url);
				console.log('requestConf : ' + JSON.stringify(requestConf));

				const responseData = await this.helpers.httpRequest(requestConf);

				if (typeof responseData === 'string') {
					const trimmed = responseData.trim();
					if (trimmed !== '') {
						try {
							returnData.push({ json: JSON.parse(trimmed) });
						} catch {
							returnData.push({ text: trimmed });
						}
					} else {
						returnData.push({ 'Status Code': '204 No Content' });
					}
				} else if (responseData) {
					returnData.push(responseData);
				} else {
					returnData.push({ 'Status Code': '204 No Content' });
				}

			} catch (error) {
        throw new NodeApiError(this.getNode(), {
          message: `Error calling Float API: ${error.message}`,
          description: error.stack || 'No stack trace available'
        });
      }
    }
    return [this.helpers.returnJsonArray(returnData)];
  }
}
