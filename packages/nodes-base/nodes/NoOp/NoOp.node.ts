import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class NoOp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'No Operation, do nothing',
		name: 'noOp',
		icon: 'fa:arrow-right',
		group: ['organization'],
		version: 1,
		description: 'No Operation',
		defaults: {
			name: 'No Operation, do nothing',
			color: '#b0b0b0',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		for (let i = 0; i < 10; i++) {
			console.log('run', i);
			await new Promise((r) => setTimeout(r, 1000));
			if (!this.isRunning()) {
				console.log('stopped in node');
				break;
			}
		}

		return [items];
	}
}
