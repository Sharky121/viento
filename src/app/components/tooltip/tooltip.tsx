'use client';

import { useState } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useInteractions,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    FloatingPortal
  } from '@floating-ui/react';
import styles from './style.module.scss';

type SpecType = {
    width: number,
    length: number
}

const Tooltip = ({title, name, spec}: {title: string, name: string, spec: SpecType}) => {
    const [isOpen, setIsOpen] = useState(false);

    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: 'top',
        middleware: [offset(15), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {move: false});
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, {
        role: 'tooltip',
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    return (
        <>
            <span ref={refs.setReference} {...getReferenceProps()}>
                {title}
            </span>
            <FloatingPortal>
                {isOpen && (
                    <div
                        className={styles.tooltip}
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        <div className={styles.tooltipWrapper}>
                            <h6 className={styles.tooltipTitle}>{name}</h6>
                            <dl>
                                <div>
                                    <dt>Ширина</dt>
                                    <dd>{spec.width}</dd>
                                </div>
                                <div>
                                    <dt>Длина</dt>
                                    <dd>{spec.length}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                )}
            </FloatingPortal>
        </>
    );
}

export default Tooltip;