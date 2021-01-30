
/* IMPORT */

import * as vscode from 'vscode';
import Utils from '../../utils';

/* ITEM */

class Item extends vscode.TreeItem {

  obj;
  contextValue = 'item';

  constructor ( obj, label, collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None ) {

    super ( label, collapsibleState );

    this.obj = obj;
    if (this.label.match(/@thisweek/)) {
      this.iconPath = new vscode.ThemeIcon("calendar");
    } else if (this.label.match(/@today/)) {
      this.iconPath = new vscode.ThemeIcon("star-full");
    }
  }

  setTypeIcon ( type ) {

    const iconPath = Utils.view.getTypeIcon ( type );

    if ( iconPath ) {

      this.iconPath = iconPath;

    }

  }

}

/* EXPORT */

export default Item;
