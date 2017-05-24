
import * as React from 'react';
import CSSModules from 'react-css-modules';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import SvgIcon from 'material-ui/SvgIcon';
import { pure } from 'recompose';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import { FileListState, File } from '../../reducers/FileList'
const styles = require("./FileList.css");

const SelectableList = makeSelectable(List);
let CustomIcon = (props: { [key: string]: any }) => (
    <SvgIcon viewBox="0 0 32 32" {...props}>
        <g>
            <path d="M12.325,23.654s-1.07.622.761.833a16.023,16.023,0,0,0,5.8-.246,10.088,10.088,0,0,0,1.541.752c-5.481,2.349-12.405-.136-8.1-1.339" style={{fill:"#5382a1"}} />
            <path d="M11.656,20.588s-1.2.888.633,1.078a22.618,22.618,0,0,0,7.481-.359,3.32,3.32,0,0,0,1.152.7c-6.627,1.938-14.009.153-9.266-1.421" style={{fill:"#5382a1"}} />
            <path d="M17.3,15.388a2.051,2.051,0,0,1-.355,2.954s3.429-1.77,1.854-3.987c-1.471-2.067-2.6-3.095,3.508-6.636,0,0-9.586,2.394-5.007,7.669" style={{fill:"#5382a1"}} />
            <path d="M24.552,25.921s.792.652-.872,1.157c-3.164.958-13.168,1.248-15.948.038-1-.435.874-1.038,1.464-1.164a3.8,3.8,0,0,1,.966-.108c-1.111-.783-7.181,1.537-3.083,2.2,11.176,1.812,20.372-.816,17.473-2.124" style={{fill:"#5382a1"}} />
            <path d="M12.84,17.412s-5.089,1.209-1.8,1.648a38.225,38.225,0,0,0,6.731-.072c2.106-.178,4.221-.555,4.221-.555a8.934,8.934,0,0,0-1.28.685c-5.168,1.359-15.151.727-12.277-.663a9.629,9.629,0,0,1,4.407-1.042" style={{fill:"#5382a1"}} />
            <path d="M21.969,22.515c5.253-2.73,2.824-5.353,1.129-5a3.932,3.932,0,0,0-.6.161.957.957,0,0,1,.449-.346c3.354-1.179,5.933,3.478-1.083,5.322a.458.458,0,0,0,.106-.138" style={{fill:"#5382a1"}} />
            <path d="M18.8,2s2.909,2.91-2.759,7.386c-4.546,3.59-1.037,5.637,0,7.975-2.653-2.394-4.6-4.5-3.294-6.463C14.664,8.019,19.976,6.623,18.8,2" style={{fill:"#5382a1"}} />
            <path d="M13.356,29.912c5.042.323,12.786-.179,12.969-2.565,0,0-.353.9-4.167,1.623a41.458,41.458,0,0,1-12.76.2s.645.533,3.959.746" style={{fill:"#5382a1"}} />
        </g>
    </SvgIcon>
);
CustomIcon = pure(CustomIcon);


interface FileListReduxProps {
    fileList: FileListState
}

interface FilesListProps extends FileListReduxProps {
}

interface FilesListState {
}

@CSSModules(styles)
export class FileList extends React.Component<FilesListProps, FilesListState>{
    render() {
        return <div className={styles.container}>
            <SelectableList value={0} onChange={(...args: any[]) => { console.log(args) }}>
                <Subheader>Project</Subheader>
                {this.renderFileList()}
            </SelectableList>
        </div>
    }

    renderFileList() {
        let i = 0;
        const renderFile = (file: File): JSX.Element => {
            return <ListItem
                key={i}
                value={i++}
                primaryText={file.filename}
                leftIcon={<CustomIcon />}
                nestedItems={(file.children || []).map(renderFile)}
            />
        }

        return this.props.fileList.files.map(renderFile)
    }
}
