import DemoPlugin from './main';
import { SampleModal } from './modal';
import { App, ItemView, WorkspaceLeaf } from 'obsidian';

export const VIEW_TYPE_CUSTOM = 'modal-bug-demo';

export class CustomView extends ItemView {
	component?: App;

	constructor(leaf: WorkspaceLeaf, readonly plugin: DemoPlugin) {
		super(leaf);

		// Whether this view can be used to navigate to other Obsidian views.
		this.navigation = true;
	}

	getViewType() {
		return VIEW_TYPE_CUSTOM;
	}

	getDisplayText() {
		return 'Custom view';
	}

	getIcon() {
		return 'flask-conical';
	}

	async onload() {
		const { contentEl } = this;
		const paraEl = contentEl.createEl('p');
		paraEl.setText(
			'After modal closed, continue press enter to see the difference'
		);
		const buttonEl = contentEl.createEl('button');
		buttonEl.setText('Click to open modal');
		buttonEl.onClickEvent(() => {
			new SampleModal(this.app).open();
		});
	}

	async onOpen() {}

	async onClose() {}
}
