import React, { useState } from "react"

function HistoryList() {
    const [historyList, setHistoryList] = useState([]);
    return( 
        <div>
            {historyList.length==0?
                <div>
                    <Image src={} />
                </div>
                :<div>List</div>
            }
        </div>
    )
}

export default HistoryList;
