import { SampleModal } from './modal';
import { CustomView, VIEW_TYPE_CUSTOM } from './view';
import { Plugin } from 'obsidian';

export default class DemoPlugin extends Plugin {
	async onload() {
		// open modal
		this.addRibbonIcon(
			'bell-ring',
			'Call out the modal in the main window',
			() => {
				new SampleModal(this.app).open();
			}
		);

		this.registerView(
			VIEW_TYPE_CUSTOM,
			(leaf) => new CustomView(leaf, this)
		);

		// activate view
		this.addRibbonIcon(
			'chevron-right-square',
			'Activate a custom view',
			() => {
				const leaf = this.app.workspace.getLeaf('tab');

				leaf.setViewState({
					type: VIEW_TYPE_CUSTOM,
					active: true,
				});

				this.app.workspace.revealLeaf(leaf);
			}
		);
	}

	onunload() {}
}
