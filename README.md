# n8n-nodes-float  

This is an n8n community node. It lets you interact with Float in your n8n workflows.  

Float is a resource management platform used to plan team capacity and schedules, track time spent on projects, forecast hiring needs, view visual team workloads and availability, and generate detailed reports on project budgets and resource utilization.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.  

[Installation](#installation)  
[Credentials](#credentials)    
[Operations](#operations)   
[Using as a Tool](#using-as-a-tool)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation  

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.  

Alternatively, you can manually install it:  

```sh  
git clone https://github.com/elevate-agency-data/n8n-nodes-float.git 
cd n8n-nodes-float 
npm install  
```  

Then, place the node file in the `~/.n8n/custom-nodes` directory (or follow instructions specific to your n8n installation).   

## Credentials  

To use this node, you need an Float API key with access to Float.  

## Operations  

This node supports the following operations within Float:  

* **Account**
    - Lists accounts
    - Retrieves a single account
* **Allocation**
    - Adds a new allocation as a task
    - Deletes an allocation as a task
    - Lists allocations as tasks
    - Retrieves a single allocation as a task
    - Updates an allocations details as a task
* **Client**
    - Adds a new client
    - Deletes a client
    - Lists clients
    - Retrieves a single client
    - Updates a client name
* **Department**
    - Adds a new department
    - Deletes a department
    - Lists departments
    - Retrieves a single department
    - Updates a department details
* **Logged Time**
    - Adds a log time for a person
    - Deletes an existing logged time entry
    - Lists logged time for a project or person
    - Retrieves a single logged time entry
    - Updates an existing logged time entry
* **Milestone**
    - Adds a new project milestone
    - Deletes a milestone
    - Lists project milestones
    - Retrieves a single project milestone
    - Updates a milestone details
* **People**
    - Adds a new person
    - Deletes a person
    - Lists people
    - Retrieves a single person
    - Updates a person details
* **Phase**
    - Adds a new phase
    - Deletes a phase
    - Lists phases
    - Retrieves a single phase
    - Updates a phase details
* **Project**
    - Adds a new project
    - Deletes a project
    - Lists projects
    - Retieves a single project
    - Updates a project details
* **Project Expense**
    - Creates a project expense
    - Deletes a project expense
    - Lists project expenses
    - Retrieves a single project expense
    - Updates a project expense
* **Project Stage**
    - Adds a new project stage
    - Deletes a project stage
    - Gets a project stage
    - Lists projects stages
    - Updates a project stage details
* **Project Task**
    - Add a new project task
    - Deletes a project task
    - Lists project tasks
    - Merges project tasks
    - Retrieves a single project task
    - Updates a project tasks details
* **Public Holiday**
    - Lists public holidays
    - Retrieves a single public holiday
* **Report**
    - Retrieves report data for a list of people
    - Retrieves report data for a list of projects
* **Role**
    - Adds a new role
    - Deletes a role
    - Lists roles
    - Retrieves a single role
    - Updates a role
* **Status**
    - Adds a new status
    - Deletes a status
    - Lists statuses
    - Retrieves a single status
    - Updates a status details
* **Team Holiday**
    - Creates a team holiday
    - Deletes a team holiday
    - Lists team holidays
    - Retrieves a single team holiday
    - Updates a holiday details
* **Time Off**
    - Adds a new time off
    - Deletes a time off record
    - Lists of time off scheduled
    - Retrieves a single time off
    - Updates a time off details
* **Time Off Type**
    - Adds a new time off type
    - Lists of time off types
    - Retrieves a single time off type
    - Updates a time off type details

Retrieve information from the [Float API](https://developer.float.com/index.html). 

## Using as a Tool

This node can be used as a tool in n8n AI Agents. To enable community nodes as tools, you need to set the `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE` environment variable to `true`.

### Setting the Environment Variable

**If you're using a bash/zsh shell:**
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
n8n start
```

**If you're using Docker:**
Add to your docker-compose.yml file:
```yaml
environment:
  - N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you're using the desktop app:**
Create a `.env` file in the n8n directory:
```
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

**If you want to set it permanently on Mac/Linux:**
Add to your `~/.zshrc` or `~/.bash_profile`:
```bash
export N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Compatibility  

- Tested with: 1.116.2 (Success)

## Resources  

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)  
- [Float API documentation](https://developer.float.com/index.html)
