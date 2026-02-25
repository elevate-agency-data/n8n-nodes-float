import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon
} from 'n8n-workflow';

export class FloatApi implements ICredentialType {
  name = 'floatApi';
  displayName = 'Float API';
  documentationUrl = 'https://developer.float.com/index.html';
  icon: Icon = 'file:icons/float.svg';
  properties: INodeProperties[] = [
    {
      displayName: 'Float Access Token',
      name: 'floatAccessToken',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      required: true,
      description: 'Float Access Token for the Float API'
    }
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    },
  };

  test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://api.float.com/v3/accounts',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': '=Bearer {{$credentials.floatAccessToken}}',
			}
		}
  };
}
