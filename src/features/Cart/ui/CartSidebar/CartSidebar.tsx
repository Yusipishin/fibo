import { memo } from 'react';
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar';

interface CartSidebarProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const CartSidebar = memo((props: CartSidebarProps) => {
    const { className, onClose, isOpen } = props;
    // const SidebarItemsList = useSelector(getSidebarItems);

    // const itemsList = useMemo(
    //     () =>
    //         SidebarItemsList.map((item) => (
    //             <SidebarItem
    //                 key={item.path}
    //                 item={item}
    //                 collapsed={collapsed}
    //             />
    //         )),
    //     [SidebarItemsList, collapsed],
    // );

    return <Sidebar isOpen={isOpen} onClose={onClose} />;
});
