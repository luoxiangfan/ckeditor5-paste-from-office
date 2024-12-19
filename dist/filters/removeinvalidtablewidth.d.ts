/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */
/**
 * @module paste-from-office/filters/removeinvalidtablewidth
 */
import type { UpcastWriter, ViewDocumentFragment } from 'ckeditor5/src/engine.js';
/**
 * Removes the `width:0px` style from table pasted from Google Sheets.
 *
 * @param documentFragment element `data.content` obtained from clipboard
 */
export default function removeInvalidTableWidth(documentFragment: ViewDocumentFragment, writer: UpcastWriter): void;
