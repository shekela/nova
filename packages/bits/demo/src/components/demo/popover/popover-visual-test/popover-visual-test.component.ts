// © 2022 SolarWinds Worldwide, LLC. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to
//  deal in the Software without restriction, including without limitation the
//  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
//  sell copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.

import { OverlayConfig } from "@angular/cdk/overlay";
import { Component } from "@angular/core";
import { Subject } from "rxjs";

import { OVERLAY_WITH_POPUP_STYLES_CLASS } from "@nova-ui/bits";

@Component({
    selector: "nui-popover-visual-test",
    templateUrl: "./popover-visual-test.component.html",
    styleUrls: ["./popover-visual-test.component.less"],
})
export class PopoverVisualTestComponent {
    public dataset = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    };
    public closePopoverSubject = new Subject<void>();
    // Testing only
    public overlayConfig: OverlayConfig = {
        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, "combobox-v2-test-pane"],
    };
    closePopover(): void {
        this.closePopoverSubject.next();
    }
}
