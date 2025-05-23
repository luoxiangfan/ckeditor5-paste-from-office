/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */
/**
 * Removes the `<b>` tag wrapper added by Google Docs to a copied content.
 *
 * @param documentFragment element `data.content` obtained from clipboard
 */
export default function removeBoldWrapper(documentFragment, writer) {
    for (const child of documentFragment.getChildren()) {
        if (child.is('element', 'b') && child.getStyle('font-weight') === 'normal') {
            const childIndex = documentFragment.getChildIndex(child);
            writer.remove(child);
            writer.insertChild(childIndex, child.getChildren(), documentFragment);
        }
    }
}
