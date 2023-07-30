import { App, Modal } from 'obsidian';

export class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		this.titleEl.setText('Sample Modal');
		const { contentEl } = this;
		const paraEl = contentEl.createEl('p');
		paraEl.setText('Press enter to close the modal');
		const inputEl = contentEl.createEl('input');
		inputEl.type = 'text';
		inputEl.addEventListener('keydown', (ev: KeyboardEvent) => {
			if (ev.key == 'Enter') {
				ev.preventDefault(); // without this, the modal called through the view would persist (can't be closed by 'enter' key)
				this.close();
			}
		});
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
