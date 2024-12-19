/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */
import type { PasteFromOffice } from './index.js';
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [PasteFromOffice.pluginName]: PasteFromOffice;
    }
}